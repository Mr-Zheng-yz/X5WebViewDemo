package com.tuju.x5webviewdemo.vassonic;

import android.content.Context;
import android.os.Environment;
import android.widget.Toast;
import com.tencent.sonic.sdk.SonicRuntime;
import com.tencent.sonic.sdk.SonicSessionClient;

import java.io.File;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

public class SonicRuntimeImpl extends SonicRuntime {
    public SonicRuntimeImpl(Context context) {
        super(context);
    }

    @Override
    public void log(String tag, int level, String message) {

    }

    @Override
    public String getCookie(String url) {
        return null;
    }

    @Override
    public boolean setCookie(String url, List<String> cookies) {
        return false;
    }

    /**
     * 获取用户UA信息
     * @return
     */
    @Override
    public String getUserAgent() {
        return "";
    }
    /**
     * 获取用户ID信息
     * @return
     */
    @Override
    public String getCurrentUserAccount() {
        return "";
    }

    @Override
    public boolean isSonicUrl(String url) {
        return false;
    }

    @Override
    public Object createWebResourceResponse(String mimeType, String encoding, InputStream data, Map<String, String> headers) {
        return null;
    }

    @Override
    public boolean isNetworkValid() {
        return false;
    }

    @Override
    public void showToast(CharSequence text, int duration) {
        Toast.makeText(context, text, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void postTaskToThread(Runnable task, long delayMillis) {
    }

    @Override
    public void notifyError(SonicSessionClient client, String url, int errorCode) {
    }

    /**
     * 创建sonic文件存放的路径
     * @return
     */
    @Override
    public File getSonicCacheDir() {
        String path = Environment.getExternalStorageDirectory().getAbsolutePath() + File.separator         + "sonic/";
        File file = new File(path.trim());
        if(!file.exists()){
            file.mkdir();
        }
        return file;
    }
}