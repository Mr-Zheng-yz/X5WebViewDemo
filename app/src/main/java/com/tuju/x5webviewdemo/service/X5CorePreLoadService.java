package com.tuju.x5webviewdemo.service;

import android.app.IntentService;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import androidx.annotation.Nullable;
import com.tencent.smtt.sdk.QbSdk;

public class X5CorePreLoadService extends IntentService {
    private static final String TAG = X5CorePreLoadService.class.getSimpleName();

    private QbSdk.PreInitCallback cb = new QbSdk.PreInitCallback() {

        @Override
        public void onViewInitFinished(boolean arg0) {
            //初始化完成回调
            Toast.makeText(X5CorePreLoadService.this, "加载h5内核成功?   " + arg0, Toast.LENGTH_SHORT).show();
            Log.i(TAG, "onViewInitFinished: " + arg0);
        }

        @Override
        public void onCoreInitFinished() {
//            Toast.makeText(X5CorePreLoadService.this, "加载h5内核失败！！", Toast.LENGTH_SHORT).show();
        }
    };

    /**
     * Creates an IntentService.  Invoked by your subclass's constructor.
     */
    public X5CorePreLoadService() {
        super(TAG);
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        //在这里添加我们要执行的代码，Intent中可以保存我们所需的数据，
        //每一次通过Intent发送的命令将被顺序执行
        initX5();
    }

    /**
     * 初始化X5内核
     */
    private void initX5() {
//        if (!QbSdk.isTbsCoreInited()) {
//            QbSdk.preInit(getApplicationContext(), cb);// 设置X5初始化完成的回调接口
//        }
        QbSdk.initX5Environment(getApplicationContext(), cb);
    }

}
