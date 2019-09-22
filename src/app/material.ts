import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MAT_RIPPLE_GLOBAL_OPTIONS } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPasswordStrengthModule,
    MatSnackBarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPasswordStrengthModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }
  ]
})
export class MaterialModule {}
