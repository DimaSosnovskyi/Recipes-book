
import { ShopingListService } from './shared/services/shoping-list.service';
import { RecepiListService } from 'src/app/shared/services/recepiList.service';
import { DropDownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingList } from 'src/app/shopingList/shopingList.component';
import { ShopingListEdit } from 'src/app/shopingList/shopingListEdit/shopingListEdit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ModelComponent } from './model/model.component';
import { HeaderComponent } from './Header/Header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingList,
    ShopingListEdit,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ModelComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecepiListService,ShopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
