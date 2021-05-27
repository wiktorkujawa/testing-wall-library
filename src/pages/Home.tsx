import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { calculateOrder } from "wall-partition-assemble";
import * as yup from "yup";
import FormBox from "../components/styled/FormBox";
import { NumberInput } from "../components/styled/NumberInput";
import P from "../components/styled/P";
import { SubmitButton } from "../components/styled/SubmitButton";

const validationSchema = yup.object({
  wallLength: yup
    .number()
    .required("Wall length is required")
    .test(
      "Is positive?",
      "The wall length must be a positive value",
      (value: any) => value > 0
    ),
});

const Home = () => {
  const [order, setOrder] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      wallLength: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setOrder(calculateOrder(values.wallLength));
    },
  });

  return (
    <>
      <FormBox>
        
      <form
        data-testid="submit"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <P className="text-center">Purchase Order</P>

        <P size="small">
           Wall length
        </P>
        <NumberInput
          step="any"
          data-testid="input"
          theme={!formik.errors.wallLength}
          placeholder="Insert wall length in linear feet"
          id="wallLength"
          name="wallLength"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.wallLength}
        />
        
        <P color="error" size="small" className="mb-5">
          {formik.errors.wallLength}
        </P>
      <div className="text-center">
        <SubmitButton data-testid="click" type="submit">
          Order
        </SubmitButton>
        </div>
      </form>
      </FormBox>

      <h1>Materials needed:</h1>

<TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((material:any) => (
            <TableRow key={material.name}>
              <TableCell component="th" scope="row">
                {material.name}
              </TableCell>
              <TableCell align="right">{material.quantity}</TableCell>
              <TableCell align="right">
               <img src={material.image} alt="" height="40" /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        





   </>
  );
};

export default Home;
