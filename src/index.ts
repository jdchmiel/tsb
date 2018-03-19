'use strict';

export class HelloService {
    private config : any;
    private logger : any;

    constructor(config: any) {
        this.config = config;
        this.logger = config.logger || console;
    }

    sayHi(name: string):string {
        this.logger.log('greeting', name);
        return (this.config.greet || 'hello') + ' ' + name;
    }
}