package com.tuju.x5webviewdemo

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import kotlinx.android.synthetic.main.activity_web_view.*

class WebViewActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_web_view)
        window.addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN) //隐藏状态栏

        initWebView()
        val url = intent.getStringExtra("url")
        webview.loadUrl(url)
    }

    private fun initWebView(){
        webview.webViewClient = object : WebViewClient() {
            //防止加载网页时调起系统浏览器
            override fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {
                view.loadUrl(url)
                return true
            }
        }

        val ws = webview.settings
        // 网页内容的宽度是否可大于WebView控件的宽度
        ws.setLoadWithOverviewMode(false)
        // 保存表单数据
        ws.setSaveFormData(true)
        // 是否应该支持使用其屏幕缩放控件和手势缩放
        ws.setSupportZoom(true)
        ws.setBuiltInZoomControls(true)
        ws.setDisplayZoomControls(false)
        // 启动应用缓存
        ws.setAppCacheEnabled(true)
        // 设置缓存模式
        ws.setCacheMode(WebSettings.LOAD_DEFAULT)
        // setDefaultZoom  api19被弃用
        // 设置此属性，可任意比例缩放。
        ws.setUseWideViewPort(true)
        // 告诉WebView启用JavaScript执行。默认的是false。
        ws.setJavaScriptEnabled(true)
        //  页面加载好以后，再放开图片
        ws.setBlockNetworkImage(false)
        // 使用localStorage则必须打开
        ws.setDomStorageEnabled(true)
        // 排版适应屏幕
        ws.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS)
        // webview从5.0开始默认不允许混合模式,https中不能加载http资源,需要设置开启。
//		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
//			ws.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
//		}
        /** 设置字体默认缩放大小(改变网页字体大小,setTextSize  api14被弃用)*/
        ws.setTextZoom(100)
        // 不缩放
        webview.setInitialScale(100)

        webview.webChromeClient = WebViewChromeClient()
    }

    inner class WebViewChromeClient : WebChromeClient() {
        override fun onProgressChanged(view: WebView?, newProgress: Int) {
            super.onProgressChanged(view, newProgress)
            if (newProgress == 100) {
                tv_loading.visibility = View.GONE
            } else {
                tv_loading.visibility = View.VISIBLE
                tv_loading.text = "$newProgress%"
            }
        }
    }

    companion object {
        fun loadUrl(context: Context, url: String) {
            val intent = Intent(context, WebViewActivity::class.java)
            intent.putExtra("url", url)
            context.startActivity(intent)
        }
    }
}
