import {buildProvidersTree} from "@/utils/buildProvidersTree";
import TanStackProvider from "@/providers/tanstack-provider";

const ProviderTree = buildProvidersTree([
    [TanStackProvider]
])

export default ProviderTree
