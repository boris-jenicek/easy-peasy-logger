import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [AppComponent, GeneratorComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
