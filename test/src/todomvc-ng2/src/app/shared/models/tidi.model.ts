import { Direction } from '../miscellaneous/miscellaneous';

import { LogMethod, LogProperty, LogPropertyWithArgs, LogClass } from '../decorators/log.decorator';

/**
 * The tidi class
 */
@LogClass
export class Tidi {
    completed: boolean;
}
