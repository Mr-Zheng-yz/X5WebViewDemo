package com.tuju.x5webviewdemo.vassonic;

import android.os.Bundle;
import com.tencent.smtt.sdk.WebView;
import com.tencent.sonic.sdk.SonicSessionClient;

import java.util.HashMap;

public class SonicSessionClientImpl extends SonicSessionClient {
    private WebView webView;
    public void bindWebView(WebView webView) {
        this.webView = webView;
    }

    /**
     * 调用webView的loadUrl
     */
    @Override
    public void loadUrl(String url, Bundle extraData) {
        webView.loadUrl(url);
    }
    /**
     * 调用webView的loadDataWithBaseUrl方法
     */
    @Override
    public void loadDataWithBaseUrl(String baseUrl, String data, String mimeType, String encoding, String historyUrl) {
        webView.loadDataWithBaseURL(baseUrl, data, mimeType, encoding, historyUrl);
    }

    @Override
    public void loadDataWithBaseUrlAndHeader(String baseUrl, String data, String mimeType, String encoding, String historyUrl, HashMap<String, String> headers) {
    }
}