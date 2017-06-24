import { ValueError } from '@aureooms/js-error' ;

export class CodecError extends ValueError {

	constructor ( encoding , reason , object , position ) {

		super( reason ) ;

		this.encoding = encoding ;
		this.reason = reason.toString() ;
		this.object = object ;
		this.position = position ;

	}

}
