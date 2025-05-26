export function setupGoogleAnalytics(id: string) {
    if (!id) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
        window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', id);

    if (window.location.pathname) {
        gtag('event', 'page_view', {
            page_path: window.location.pathname,
            page_title: document.title,
        });
    }
}

// Add typings for gtag to avoid TS errors
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
