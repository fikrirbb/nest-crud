// import { PasswordImplementation } from './libraries/password';
// import { S3UploaderImplementation } from './libraries/uploader';
import * as path from 'path';

import { Module, Global } from '@nestjs/common';

import { INJECTABLES } from './interfaces/injectables';

// import { UploadFile } from './domain/usecases/upload_file';

// const bcryptInjection = {
//   provide: INJECTABLES.externalLibraries.bcrypt,
//   useValue: bcrypt,
// };

// const passwordInjection = {
//   provide: INJECTABLES.libraries.password,
//   useClass: PasswordImplementation,
// };

// const pathInjection = {
//   provide: INJECTABLES.externalLibraries.path,
//   useValue: path,
// };

// const uploaderInjection = {
//   provide: INJECTABLES.libraries.uploader,
//   useClass: S3UploaderImplementation,
// };

// const uploadFileInjection = {
//   provide: INJECTABLES.usecases.UploadFile,
//   useClass: UploadFile,
// };

@Global()
@Module({
  providers: [
    // bcryptInjection,
    // passwordInjection,
    // awsInjection,
    // nanoidInjection,
    // pathInjection,
    // uploaderInjection,
    // uploadFileInjection,
  ],
  exports: [
    // bcryptInjection,
    // passwordInjection,
    // awsInjection,
    // nanoidInjection,
    // pathInjection,
    // uploaderInjection,
    // uploadFileInjection,
  ],
})
export class CommonModule { }
