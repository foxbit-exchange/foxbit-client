import { Subject } from 'rxjs';

export enum EndpointMethodReplyType {
    Response,
    Event
}

export enum EndpointMethodType {
    Public,
    Private
}

export class EndpointMethodDescriptor {
    constructor(public methodType: EndpointMethodType = EndpointMethodType.Private,
                public methodReplyType: EndpointMethodReplyType = EndpointMethodReplyType.Response,
                public methodSubject: Subject<any> = new Subject<any>()) {
    }
}
