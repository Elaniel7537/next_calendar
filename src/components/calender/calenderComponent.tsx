import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';

import { Button, Col, Form, Input, Row, Select, Calendar, Typography, Divider } from 'antd';

const { Option } = Select
const { Text, Title } = Typography

const calenderComponent: React.FC = () => {
  const [form] = Form.useForm();

  const [dateIni, setDateIni] = useState() as any
  const [dateFin, setDateFin] = useState() as any
  const [column, setColumn] = useState() as any
  const [diff, setDiff] = useState([]) as any
  const [calenderTemp, setCalenderTemp] = useState() as any

  const [countSelect] = useState([1, 2, 3, 4, 5, 6]) as any

  const onFinish = async (values) => {
    let aux = []
    let auxTemp = [dateIni]

    for (let index = 1; index <= diff; index++) {
      aux.push(index)
    }

    aux.map((resp, index) => {
      auxTemp.push(moment(auxTemp[index], 'MM-YYYY').add(1, 'months'))
    })

    setCalenderTemp(auxTemp)
    setColumn(values.column)

  };

  const resetCampo = () => {
    form.resetFields(["dateFin"])
    form.validateFields(["dateFin"])
  }

  const getColumn = () => {
    let resto = 24 / column
    return resto
  }

  return (
    <>
      <Form form={form} onFinish={onFinish} className="contend-calender" id='form-calender'>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Form.Item
              label="Fecha de Inicio"
              name="dateIni"
              rules={[{
                required: true,
                message: 'Ingrese una fecha valida.',
                pattern: /^(0[1-9]|1[0-2])(\/|-)(\d{4})$/,
                type: "string"
              }]}
              labelCol={{ span: 24 }}
            >
              <Input id="dateIni" placeholder="Formato MM-YYYY" allowClear onChange={(value) => {
                setDateIni(moment(value.target.value, "MM-YYYY").format("MM-YYYY"))
              }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label="Fecha de Fin"
              name="dateFin"
              rules={[{
                required: true,
                message: 'Ingrese fecha mayor a la Inicial.',
                pattern: /^(0[1-9]|1[0-2])(\/|-)(\d{4})$/,
                type: "string"
              }]}
              labelCol={{ span: 24 }}
            >
              <Input id="dateFin" placeholder="Formato MM-YYYY" allowClear onChange={(e) => {

                if (e.target.value.length > 6) {
                  setDiff(moment(e.target.value, "MM-YYYY").diff(moment(dateIni, "MM-YYYY"), 'months'));
                  Math.sign(moment(e.target.value, "MM-YYYY").diff(moment(dateIni, "MM-YYYY"), 'months')) < 0 ? resetCampo() : setDateFin(e.target.value)
                }
              }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label="Columnas"
              name="column"
              rules={[{ required: true, message: 'Seleccione Valor.' }]}
              labelCol={{ span: 24 }}
            >
              <Select placeholder="Seleccione un valor.">
                {countSelect.map((resp, index) => {
                  return <Option key={index.toString()} value={resp}>{resp}</Option>
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col span={4} className="btn-generate-calender">
            <Form.Item labelCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Generar Calendario
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={3}> Lista de calendarios</Title>
        </Col>
        <br />
        {calenderTemp?.map((resp, index): any => {
          return (
            <Col key={index.toString()} span={getColumn()} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="site-calendar-demo-card">
                <Calendar
                  fullscreen={false}
                  value={moment(calenderTemp[index], 'MM-YYYY')}
                  disabledDate={() => { return true }}
                  headerRender={(value) => {
                    return (
                      <div style={{ width: '100%', textAlign: 'center' }}>
                        <Text strong>{moment(value.value).format('MMMM YYYY')}</Text>
                      </div>
                    )
                  }} />
              </div>
              <br />
            </Col>
          )
        })}
      </Row>
    </>
  );
};

export default calenderComponent;
