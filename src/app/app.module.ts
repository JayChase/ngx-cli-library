import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestLibraryModule } from './test-library/test-library.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent } from './app.component';
