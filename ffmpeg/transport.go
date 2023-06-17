package ffmpeg

import (
	"os/exec"

	"github.com/gorilla/websocket"
)

func HandleVideoStream(wsConn *websocket.Conn, rtspUrl string) error {
	// 定义 ffmpeg 命令行参数
	args := []string{
		"-i", rtspUrl,
		"-c:v", "libx264",
		// "-an", 不处理音频
		"-f", "flv",
		"-flvflags", "no_sequence_end+no_metadata",
		"-preset",
		"ultrafast",
		"-crf",
		"35",
		"-b:v",
		"1200k",
		"-threads",
		"8",
		"-",
	}

	// 创建 ffmpeg 命令行实例
	cmd := exec.Command("ffmpeg", args...)

	// 获取输出流
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		return err
	}

	// 启动命令行实例
	if err := cmd.Start(); err != nil {
		return err
	}

	// 读取输出流并写入 ws 响应体
	buffer := make([]byte, 1024)
	for {
		n, err := stdout.Read(buffer)
		if err != nil {
			break
		}

		if err := wsConn.WriteMessage(websocket.BinaryMessage, buffer[:n]); err != nil {
			return err
		}
	}

	// 等待命令行实例执行完成
	if err := cmd.Wait(); err != nil {
		return err
	}

	return nil
}
