package com.tuju.x5webviewdemo.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import com.tencent.smtt.sdk.QbSdk;
import com.tencent.smtt.sdk.WebView;

public class X5WebView extends WebView {

    public X5WebView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        getView().setClickable(true);
    }

    @Override
    protected boolean drawChild(Canvas canvas, View child, long drawingTime) {
        //debug 画出X5内核信息
        boolean ret = super.drawChild(canvas, child, drawingTime);
        canvas.save();//测试
        Paint paint = new Paint();
        paint.setColor(0x7fff0000);
        paint.setTextSize(24.f);
        paint.setAntiAlias(true);
        if (getX5WebViewExtension() != null) {
            canvas.drawText(this.getContext().getPackageName() + "-pid:"
                    + android.os.Process.myPid(), 10, 50, paint);
            canvas.drawText(
                    "X5  Core:" + QbSdk.getTbsVersion(this.getContext()), 10,
                    100, paint);
        } else {
            canvas.drawText(this.getContext().getPackageName() + "-pid:"
                    + android.os.Process.myPid(), 10, 50, paint);
            canvas.drawText("Sys Core", 10, 100, paint);
        }
        canvas.drawText(Build.MANUFACTURER, 10, 150, paint);
        canvas.drawText(Build.MODEL, 10, 200, paint);
        canvas.restore();
        return ret;
    }

}
