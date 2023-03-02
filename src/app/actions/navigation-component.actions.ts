import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const navigationComponentActions = createActionGroup({
  source: 'Navigation Component',
  events: {
    'Toggle side navigation': props<{isOpen: boolean}>()
  }
})
