import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatIconModule
];
const COMMON_DECLARATIONS = [NavbarComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class NavbarModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}