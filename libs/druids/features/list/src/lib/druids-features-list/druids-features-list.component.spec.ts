import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DruidsFeaturesListComponent } from './druids-features-list.component'

describe('DruidsFeaturesListComponent', () => {
    let component: DruidsFeaturesListComponent
    let fixture: ComponentFixture<DruidsFeaturesListComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DruidsFeaturesListComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(DruidsFeaturesListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
