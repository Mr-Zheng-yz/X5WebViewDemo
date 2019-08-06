package com.tuju.x5webviewdemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import androidx.appcompat.app.AlertDialog
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initView()
    }

    private fun initView() {
        btn_setUrl.setOnClickListener {
            showSetDialog()
        }

        btn_webview.setOnClickListener {
            WebViewActivity.loadUrl(this@MainActivity, tv_url.text.toString())
        }

        btn_x5_webview.setOnClickListener {
            X5WebViewActivity.loadUrl(this@MainActivity, tv_url.text.toString())
        }
    }

    private fun showSetDialog() {
        val dialog = AlertDialog.Builder(this)
        val editText = EditText(this)
        editText.hint = "设置url"
        editText.setText(tv_url.text.toString())
        dialog.setView(editText)
        dialog.setPositiveButton("确定") { _, _ ->
            tv_url.text = editText.text
            dialog.create().dismiss()
        }
        dialog.show()
    }

}
