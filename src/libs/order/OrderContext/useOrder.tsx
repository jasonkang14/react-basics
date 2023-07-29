import { useContext } from "react";

import OrderContext from "./context";

const useOrder = () => useContext(OrderContext);

export default useOrder;
