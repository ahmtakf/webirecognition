import { CookieService } from 'ngx-cookie-service';

class Share {

    private static instance: Share = new Share();

    private isLogged = false;

    private constructor() {
        if (Share.instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
        }
        Share.instance = this;
        if ( new CookieService(document).get('token') ) {
            this.display();
        }else {
            this.hide();
        }
    }

    public static getInstance(): Share {
        return Share.instance;
    }

    display() {
        this.isLogged = true;
    }

    hide() {
        this.isLogged = false;
    }

    getLogged() {
        return this.isLogged;
    }

}
export default Share;

