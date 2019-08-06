package com.tuju.x5webviewdemo

import android.annotation.SuppressLint
import android.app.Application
import android.content.Context
import android.content.Intent
import android.util.Log
import com.tencent.smtt.sdk.QbSdk
import com.tuju.x5webviewdemo.service.X5CorePreLoadService
import com.tuju.x5webviewdemo.utils.showToast

class App : Application() {

    override fun onCreate() {
        super.onCreate()
        instrance = this

//        val cb = object : QbSdk.PreInitCallback {
//            override fun onViewInitFinished(arg0: Boolean) {
//                //x5內核初始化完成的回调，为true表示x5内核加载成功，否则表示x5内核加载失败，会自动切换到系统内核。
//                Log.d("app", " onViewInitFinished is $arg0")
//                showToast("加载h5内核成功?... $arg0")
//            }
//
//            override fun onCoreInitFinished() {
//            }
//        }
////        x5内核初始化接口
//        QbSdk.initX5Environment(applicationContext, cb)
        preInitX5Core()
    }

    /**
     * 初始化X5内核
     */
    private fun preInitX5Core() {
        //预加载x5内核
        val intent = Intent(this, X5CorePreLoadService::class.java)
        startService(intent)
    }

    companion object {
        @SuppressLint("StaticFieldLeak")
        lateinit var instrance: Context
    }

}