import * as matchers from 'jest-extended';
expect.extend(matchers);

import { toBeArray, toBeSealed } from 'jest-extended';
expect.extend({ toBeArray, toBeSealed });

/**
* * Esta configuracion es para agregar nuevos matchers de jJst desarrollados por la comunidad.
*/