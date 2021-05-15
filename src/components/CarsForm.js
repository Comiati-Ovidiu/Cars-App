import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import _ from "lodash";

import { TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "./Modal";

const CarsForm = (props) => {
    const { initialValues, closeUrl, onSubmit, title, subtitle } = props
    const [open, setOpen] = useState(true);

    let history = useHistory();
    const classes = useStyles();

    const handleClose = () => {
        history.push(`${closeUrl}`);
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    const content = (
        <form>
            <div>
                <Box className={classes.label}>
                    Make
                    <span className={classes.asterisk}>&#42;</span>
                </Box>
                <TextField
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    id="make"
                    name="make"
                    onBlur={formik.handleBlur}
                    value={formik.values.make}
                    onChange={formik.handleChange}
                    error={formik.touched.make && Boolean(formik.errors.make)}
                    helperText={formik.touched.make && formik.errors.make}
                />
                <Box className={classes.label}>
                    Model
                    <span className={classes.asterisk}>&#42;</span>
                </Box>
                <TextField
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    id="model"
                    name="model"
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    error={formik.touched.model && Boolean(formik.errors.model)}
                    helperText={formik.touched.model && formik.errors.model}
                />
                <Box className={classes.label}>
                    HorsePower
                    <span className={classes.asterisk}>&#42;</span>
                </Box>
                <TextField
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    id="horsepower"
                    name="horsepower"
                    onBlur={formik.handleBlur}
                    value={formik.values.horsepower}
                    onChange={formik.handleChange}
                    error={formik.touched.horsepower && Boolean(formik.errors.horsepower)}
                    helperText={formik.touched.horsepower && formik.errors.horsepower}
                />
            </div>
        </form>
    );

    return (
        <Modal
            open={open}
            title={title}
            subtitle={subtitle}
            content={content}
            handleClose={handleClose}
            handleAction={formik.handleSubmit}
            actionButtonText={"Save"}
        />
    );
};

const validationSchema = yup.object({
    make: yup
        .string("")
        .matches(/^[A-Za-z0-9\/\,\'\_\` ]*$/, "Please enter valid make!")
        .required("Make is required")
        .max(40),
    model: yup
        .string("")
        .matches(/^[A-Za-z0-9\/\,\'\_\` ]*$/, "Please enter valid model!")
        .required("Model is required")
        .max(40),
    horsepower: yup
        .number()
        .typeError("Please select a valid number!")
        .integer("Must enter an integer value!")
        .min(0)
        .max(10000)
        .required("Horsepower is required"),
});

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: theme.typography.subtitle1.fontSize,
        margin: "0.5rem 0 0 0",
    },
    asterisk: {
        color: "red",
    },
}));

export default CarsForm;
