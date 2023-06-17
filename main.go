package main

import (
	"gin-rtc/ffmpeg"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

func main() {
	// 初始化gin框架
	r := gin.Default()
	r.GET("/ws", func(c *gin.Context) {
		// 允许所有请求类型
		upgrader := &websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		}

		// 升级连接为websocket
		wsConn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			log.Println("upgrade:", err)
			return
		}
		defer wsConn.Close()
		// 发送视频流和处理视频流
		err = ffmpeg.HandleVideoStream(wsConn, "rtsp://127.0.0.1:8554/video")
		// 异常提示
		if err != nil {
			log.Println("handleVideoStream error:", err)
		}
	})

	r.GET("/ws2", func(c *gin.Context) {
		// 允许所有请求类型
		upgrader := &websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		}

		// 升级连接为websocket
		wsConn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			log.Println("upgrade:", err)
			return
		}
		defer wsConn.Close()
		// 发送视频流和处理视频流
		err = ffmpeg.HandleVideoStream(wsConn, "rtsp://127.0.0.1:8554/video")
		// 异常提示
		if err != nil {
			log.Println("handleVideoStream error:", err)
		}
	})
	r.GET("/ws3", func(c *gin.Context) {
		// 允许所有请求类型
		upgrader := &websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		}

		// 升级连接为websocket
		wsConn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			log.Println("upgrade:", err)
			return
		}
		defer wsConn.Close()
		// 发送视频流和处理视频流
		err = ffmpeg.HandleVideoStream(wsConn, "rtsp://127.0.0.1:8554/video")
		// 异常提示
		if err != nil {
			log.Println("handleVideoStream error:", err)
		}
	})
	r.GET("/ws4", func(c *gin.Context) {
		// 允许所有请求类型
		upgrader := &websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		}

		// 升级连接为websocket
		wsConn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			log.Println("upgrade:", err)
			return
		}
		defer wsConn.Close()
		// 发送视频流和处理视频流
		err = ffmpeg.HandleVideoStream(wsConn, "rtsp://127.0.0.1:8554/video")
		// 异常提示
		if err != nil {
			log.Println("handleVideoStream error:", err)
		}
	})
	r.Run(":8080")
}
