import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api/api.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    spyOn(component as any, 'getImages');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should start on page 1', () => {
    expect(component.page).toBe(1);
  });

  it('Should not be loading', () => {
    expect(component.isLoading).toBeFalsy();
  })

  describe('ngOnInit()', () => {
    it('Should get the first set of images', () => {
      component.ngOnInit();
      expect(component['getImages']).toHaveBeenCalled();
    });
  });
});
