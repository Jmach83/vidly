import * as Sentry from '@sentry/browser';

function init(){
    // Sentry.init({
    //     dsn: "https://324ffedf829a4ec4b6d263d5f4fe7b55@sentry.io/1372975",
    //     release: '1-0-0',
    //     environment: 'development-test'
    });
}

function log(error){
    // Sentry.captureException(error);
    console.log(error);    
}

export default{
    init,
    log
}