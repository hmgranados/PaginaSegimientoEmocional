import {EnqueueSnackbar, useSnackbar} from "notistack";

type SnackbarVariant = "default" | "success" | "error" | "warning" | "info";

let useSnackbarRef: { enqueueSnackbar: EnqueueSnackbar };
export const SnackbarUtilsConfigurator = () => {
    const { enqueueSnackbar } = useSnackbar();
    useSnackbarRef = { enqueueSnackbar };
    return null;
};

export const SnackbarUtils = {
    success(msg: string) {
        this.toast(msg, "success");
    },
    warning(msg: string) {
        this.toast(msg, "warning");
    },
    info(msg: string) {
        this.toast(msg, "info");
    },
    error(msg: string) {
        this.toast(msg, "error");
    },
    toast(msg: string, variant: SnackbarVariant = "default") {
        useSnackbarRef.enqueueSnackbar(msg, { variant });
    },
};