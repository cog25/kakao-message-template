import { Component, Model } from '../component';

interface LinkModel extends Model {
    LPC: string;
    LMO: string;
    LCA: string;
    LCI: string;
}

export class Link extends Component {

    public Windows: string;
    public Mac: string;
    public Android: string;
    public IOS: string;

    constructor(...params: string[]) {
        super();
        if(params.length === 1) {
            this.Windows = params[0];
            this.Mac = params[0];
            this.Android = params[0];
            this.IOS = params[0];
        } else if(params.length === 2) {
            this.Windows = params[0];
            this.Mac = params[0];
            this.Android = params[1];
            this.IOS = params[1];
        } else if(params.length === 4) {
            this.Windows = params[0];
            this.Mac = params[1];
            this.Android = params[2];
            this.IOS = params[3];
        } else {
            throw new SyntaxError('Invalid link parameters. There must be 1, 2, 4 parameters.');
        }
    }

    toJson(): LinkModel {
        return {
            LPC: this.Windows,
            LMO: this.Mac,
            LCA: this.Android,
            LCI: this.IOS
        };
    }

}
