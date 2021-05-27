import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import { calculateOrder } from "wall-partition-assemble";
import * as yup from "yup";
import FormBox from "../components/styled/FormBox";
import FormGroup from "../components/styled/FormGroup";
import { NumberInput } from "../components/styled/NumberInput";
import P from "../components/styled/P";
import Select from "../components/styled/Select";
import { SubmitButton } from "../components/styled/SubmitButton";

interface IFormValues {
  wallLength: number;
  wallHeight: number;
  plasterBoardType: "Standard" | "Insulated";
  metalFrameMaterial: "Steel" | "Aluminium";
  floorMaterial: "Lumber" | "Concrete";
  ceilingMaterial: "Lumber" | "Concrete";
  connectedWallMaterial: "Lumber" | "Concrete";
}

const validationSchema = yup.object({
  wallLength: yup
    .number()
    .required("Wall length is required")
    .test(
      "Is positive?",
      "The wall length must be a positive value",
      (value: any) => value > 0
    ),
  wallHeight: yup
    .number()
    .test(
      "Is positive?",
      "The wall length must be a positive value",
      (value: any) => value > 0
    ),
});

const Advanced = () => {
  const [order, setOrder] = useState<any>([]);

  const initialValues: IFormValues = {
    wallLength: 10,
    wallHeight: 8,
    plasterBoardType: "Standard",
    metalFrameMaterial: "Steel",
    floorMaterial: "Lumber",
    ceilingMaterial: "Lumber",
    connectedWallMaterial: "Lumber",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setOrder(
        calculateOrder(
          values.wallLength,
          values.wallHeight,
          values.plasterBoardType,
          values.floorMaterial,
          values.ceilingMaterial,
          values.connectedWallMaterial,
          values.metalFrameMaterial
        )
      );
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

          <FormGroup>
            <div className="mx-3">
              <P size="small">Wall length</P>
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
            </div>

            <div className="mx-3">
              <P size="small">Wall height</P>
              <NumberInput
                step="any"
                data-testid="input"
                theme={!formik.errors.wallHeight}
                placeholder="Insert wall length in linear feet"
                id="wallHeight"
                name="wallHeight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.wallHeight}
              />

              <P color="error" size="small" className="mb-5">
                {formik.errors.wallHeight}
              </P>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="mx-3 w-100">
              <P size="small">Plaster Board Type</P>
              <Select
                name="plasterBoardType"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.plasterBoardType}
              >
                <option value="Standard">Standard</option>
                <option value="Insulated">Insulated</option>
              </Select>
            </div>

            <div className="mx-3 w-100">
              <P size="small">Metal frame material</P>
              <Select
                name="metalFrameMaterial"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.metalFrameMaterial}
              >
                <option value="Steel">Steel</option>
                <option value="Aluminium">Aluminium</option>
              </Select>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="mx-3 w-100">
              <P size="small">Floor material</P>
              <Select
                name="floorMaterial"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.floorMaterial}
              >
                <option value="Lumber">Lumber</option>
                <option value="Concrete">Concrete</option>
              </Select>
            </div>

            <div className="mx-3 w-100">
              <P size="small">Ceiling material</P>
              <Select
                name="ceilingMaterial"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.ceilingMaterial}
              >
                <option value="Lumber">Lumber</option>
                <option value="Concrete">Concrete</option>
              </Select>
            </div>

            <div className="mx-3 w-100">
              <P size="small">Connected wall material</P>
              <Select
                name="connectedWallMaterial"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.connectedWallMaterial}
              >
                <option value="Lumber">Lumber</option>
                <option value="Concrete">Concrete</option>
              </Select>
            </div>
          </FormGroup>

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
            {order.map((material: any) => (
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

export default Advanced;
