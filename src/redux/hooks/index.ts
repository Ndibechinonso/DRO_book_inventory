import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { RootState, AppDisptach } from "../store";

export const useAppDispatch = ()=> useDispatch<AppDisptach>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector