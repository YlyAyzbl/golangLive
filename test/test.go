package test

import (
	"fmt"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
)

func startStreamConversion() {
	rtspURL := "rtsp://example.com/stream"
	cmd := exec.Command("ffmpeg", "-rtsp_transport", "tcp", "-i", rtspURL, "-c:v", "libvpx", "-b:v", "1M", "-f", "webm", "-")
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		// 处理错误
	}
	if err := cmd.Start(); err != nil {
		// 处理错误
	}

	defer func() {
		if err := cmd.Process.Kill(); err != nil {
			// 处理错误
		}
	}()

	router := gin.Default()

	router.StaticFile("/", "./public/index.html")

	router.GET("/video", func(c *gin.Context) {
		c.Header("Content-Type", "video/webm")
		w := c.Writer
		flusher, ok := w.(http.Flusher)
		if !ok {
			// 处理错误
		}

		for {
			buf := make([]byte, 1024*1024)
			n, err := stdout.Read(buf)
			if err != nil {
				// 处理错误
			}

			if n > 0 {
				// 发送 SSE 数据
				fmt.Fprintf(w, "data: %s\n\n", buf[:n])
				flusher.Flush()
			}
		}
	})

	router.Run(":8080")
}
