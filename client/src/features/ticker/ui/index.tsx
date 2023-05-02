import React from 'react';
import {Button, Form, Input, InputNumber, Row, Select, SelectProps, Statistic} from "antd";
import {Instrument} from "../../../shared/enumes";

import styles from "./styles.module.scss"
import {TickerProps} from "./types";
export const Ticker: React.FC<TickerProps> = ({buyCost, sellCost}) => {
    return (
        <Form
            className={styles.form}
        >
            <Form.Item>
                <h1>Ticker</h1>
            </Form.Item>
            <Form.Item>
                <Select
                    placeholder="Choose instrument"
                    options={(Object.keys(Instrument) as Array<keyof typeof Instrument>).map((key) => {
                        return {
                            value: key,
                            label: key.split("_").map(value => {return (value + " ")})
                        }
                    })}
                    onChange={() => {}}
                />
            </Form.Item>
            <Form.Item>
                <InputNumber
                    style={{width: "100%", textAlign: "center"}}
                    placeholder="Set amount"
                    onChange={() => {}}
                />
            </Form.Item>
            <Form.Item>
                <Row>
                    <Form
                        style={{width: "50%"}}
                    >
                        <Form.Item>
                            <Statistic
                                // title="Buy"
                                value={buyCost}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button>Buy</Button>
                        </Form.Item>
                    </Form>
                    <Form
                        style={{width: "50%"}}
                    >
                        <Form.Item>
                            <Statistic
                                // title="Buy"
                                value={sellCost}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button>Sell</Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Form.Item>
        </Form>
    );
};