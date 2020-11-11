import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGamesPage } from './new-games.page';

describe('NewGamesPage', () => {
  let component: NewGamesPage;
  let fixture: ComponentFixture<NewGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
