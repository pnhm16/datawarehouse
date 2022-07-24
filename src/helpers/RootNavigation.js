import {
  createNavigationContainerRef,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function openDrawer(routeName, params) {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}
