
import React from "react";
// import Line from "./Line";
import Rect from "./Rect";
// import Text from "./Text";
import { useState, createContext, useContext } from "react";
import {UserContext} from './WizardSettings'

import { type } from "os";
export const CHART_DATA_LABEL = "char_data_label";

export enum ETemplate {
    MATRIX = "Matrix",
    T01 = "T01",
    T02 = "T02",
    T03 = "T03",
    T04 = "T04",
    T05 = "T05",
    SIX = "SIX",

    Spreadsheet = "Spreadsheet",
    Simple = "Simple",
    Standard = "Standard",

}

interface TemplateSampleData {
    templateType: ETemplate;
}

interface ISampleData {
    type: string;
    className?: string;
    cells: ICellData[];
}

interface ITableData {
    type: string;
    className?: string;
    cells?: ICellvalues[];
}

interface IchartColumn {
    type: string;
    className?: string;
    cells?: IChartValue[];
}

interface IChartValue {
    value?: string;
    className?: string;
    path?: IChartPaths;
}

interface IChartPaths {
    rect1?: IRectProps;
    rect2?: IRectProps;
}

interface IRectProps {
    color: string;
    borderColor?: string;
    borderWidth?: string;
    opacity?: number;
    className?: string;
    x: number;
    y: number;
    height: number;
    width: number;
    text?: string;
    secondType?: boolean;
}

interface ICellvalues {
    value1: string;
    className1?: string;
    value2?: string;
    className2?: string;
}

interface ICellData {
    value: string;
    className?: string;
}

const T01data: ITableData[] = [
    {
        type: "valueColumn-t01",
        className: "valueColumn",
        cells: [
            {
                value1: "Nov",
                className1: "heading heading-margin-left",
                className2: "none"
            },
            {
                value1: "PY",
                className1: "val val1Heading",
                value2: "AC",
                className2: " val val2Heading"
            },
            {
                value1: "487",
                className1: "val val1Heading bold",
                value2: "499",
                className2: "val val2Heading bold"
            },
            { value1: "183", className1: "val", value2: "187", className2: "val" },
            { value1: "124", className1: "val", value2: "123", className2: "val" },
            { value1: "100", className1: "val", value2: "101", className2: "val" }
        ]
    },
    {
        type: "valueColumn-t01-1",
        className: "valueColumn",
        cells: [
            {
                value1: "",
                className1: "heading heading-margin-right",
                className2: "none"
            },
            {
                value1: "ΔPY",
                className1: "val PY-heading",
                value2: "ΔPY%",
                className2: "val PY-heading"
            },
            {
                value1: "+12",
                className1: "val PY-heading bold",
                value2: "+2%",
                className2: "val PY-heading bold"
            },
            { value1: "+4", className1: "val", value2: "+2%", className2: "val" },
            {
                value1: "-1",
                className1: "val neg",
                value2: "-1%",
                className2: "val neg"
            },
            { value1: "+1", className1: "val", value2: "+1%", className2: "val" }
        ]
    },
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value1: "", className1: "none" },
            { value1: "", className1: "bold" },
            { value1: "Beverages", className1: "bold" },
            { value1: "Tea", className1: "childRow" },
            { value1: "Milk", className1: "childRow" },
            { value1: "Horlicks", className1: "childRow" }
        ]
    },
    {
        type: "valueColumn-t01-2",
        className: "valueColumn",
        cells: [
            {
                value1: "Jan_Nov",
                className1: "heading heading-margin-left heading-margin-right",
                className2: "none"
            },
            {
                value1: "PY",
                className1: "val PY-heading",
                value2: "AC",
                className2: "val PY-heading"
            },
            {
                value1: "395",
                className1: "val PY-heading bold",
                value2: "362",
                className2: "val PY-heading bold"
            },
            { value1: "124", className1: "val", value2: "114", className2: "val" },
            { value1: "98", className1: "val", value2: "101", className2: "val" },
            { value1: "92", className1: "val", value2: "109", className2: "val" }
        ]
    }
];

const T02Data: IchartColumn[] = [
    {
        type: "valueColumn-t02-1",
        className: "valueColumn",
        cells: [
            { value: "", className: "heading none-heading" },
            { value: "PY", className: "cell val1Heading" },
            { value: "487", className: "cell bold" },
            { value: "183", className: "cell" },
            { value: "124", className: "cell" },
            { value: "100", className: "cell" }
        ]
    },
    {
        type: "valueColumn-t02-2",
        className: "valueColumn",
        cells: [
            { value: "", className: "heading none-heading" },
            { value: "AC", className: "cell val2Heading" },
            { value: "499", className: "cell bold" },
            { value: "187", className: "cell" },
            { value: "123", className: "cell" },
            { value: "101", className: "cell" }
        ]
    },
    {
        type: "chartColumn",
        className: "chartColumn",
        cells: [
            { value: "Nov", className: "heading" },
            { value: "Δ PY  ", className: "PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 17,
                        y: 5,
                        height: 5,
                        width: 11,
                        text: "+12",
                        secondType: true,
                        className: "bold"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 17,
                        y: 5,
                        height: 5,
                        width: 4,
                        text: "+4",
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#FF000A",
                        borderWidth: "2",
                        opacity: 2,
                        x: 10,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "-1",
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 17,
                        y: 5,
                        height: 5,
                        width: 4,
                        text: "+1",
                        secondType: true
                    }
                }
            }
        ]
    },
    {
        type: "chartColumn-1",
        className: "chartColumn",
        cells: [
            { value: "", className: "heading" },
            { value: "Δ PY %", className: "PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 21,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true,
                        className: "bold"
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 3,
                        width: 7,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 10,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "-2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#FF000A",
                        opacity: 2,
                        x: 12,
                        y: 5,
                        height: 3,
                        width: 3,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 21,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 3,
                        width: 7,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 21,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 3,
                        width: 7,
                        secondType: true
                    }
                }
            }
        ]
    },
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "", className: "none" },
            { value: "", className: "bold" },
            { value: "Beverages", className: "bold" },
            { value: "Tea", className: "childRow" },
            { value: "Milk", className: "childRow" },
            { value: "Horlicks", className: "childRow" }
        ]
    },
    {
        type: "valueColumn-t02-3",
        className: "valueColumn",
        cells: [
            { value: "", className: "heading none-heading" },
            { value: "PY", className: "cell val1Heading" },
            { value: "487", className: "cell bold" },
            { value: "183", className: "cell" },
            { value: "124", className: "cell" },
            { value: "100", className: "cell" }
        ]
    },
    {
        type: "valueColumn-t02-4",
        className: "valueColumn",
        cells: [
            { value: "Jan_Nov", className: "heading" },
            { value: "AC", className: "cell val2Heading" },
            { value: "499", className: "cell bold" },
            { value: "187", className: "cell" },
            { value: "123", className: "cell" },
            { value: "101", className: "cell" }
        ]
    }
];

const T03data: ITableData[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value1: "", className1: "none" },
            { value1: "", className1: "none" },
            { value1: "Beverages", className1: "bold" },
            { value1: "  Tea" },
            { value1: "  Milk" },
            { value1: "  Horlicks" }
        ]
    },
    {
        type: "valueColumn-t03-1",
        className: "valueColumn",
        cells: [
            { value1: "USA", className1: "heading", className2: "none" },
            {
                value1: "PY",
                className1: "val val1Heading",
                value2: "AC",
                className2: "val val2Heading"
            },
            {
                value1: "487",
                className1: "val val1Heading bold",
                value2: "499",
                className2: "val val2Heading bold"
            },
            { value1: "101", className1: "val", value2: "101", className2: "val" },
            { value1: "183", className1: "val", value2: "187", className2: "val" },
            { value1: "124", className1: "val", value2: "123", className2: "val" }
        ]
    },
    {
        type: "valueColumn-t03-2",
        className: "valueColumn",
        cells: [
            { value1: "Europe", className1: "heading", className2: "none" },
            {
                value1: "PY",
                className1: "val val1Heading",
                value2: "AC",
                className2: "val val2Heading"
            },
            {
                value1: "320",
                className1: "val val1Heading bold",
                value2: "460",
                className2: "val val2Heading bold"
            },
            { value1: "162", className1: "val", value2: "93", className2: "val" },
            { value1: "111", className1: "val", value2: "162", className2: "val" },
            { value1: "47", className1: "val", value2: "68", className2: "val" }
        ]
    },
    {
        type: "valueColumn-t03-3",
        className: "valueColumn",
        cells: [
            { value1: "Asia", className1: "heading", className2: "none" },
            {
                value1: "PY",
                className1: "val val1Heading",
                value2: "AC",
                className2: "val val2Heading"
            },
            {
                value1: "302",
                className1: "val val1Heading bold",
                value2: "567",
                className2: "val val2Heading bold"
            },
            { value1: "94", className1: "val", value2: "93", className2: "val" },
            { value1: "162", className1: "val", value2: "187", className2: "val" },
            { value1: "83", className1: "val", value2: "68", className2: "val" }
        ]
    }
];

const T04Data: IchartColumn[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "", className: "none" },
            { value: "", className: "none" },
            { value: "Beverages", className: "cell bold" },
            { value: "Tea", className: "childRow" },
            { value: "Milk", className: "childRow" },
            { value: "Horlicks", className: "childRow" }
        ]
    },
    {
        type: "valueColumn-t04-1",
        className: "valueColumn",
        cells: [
            { value: "USA", className: "heading" },
            { value: "PY", className: "val1Heading" },
            { value: "487", className: "bold" },
            { value: "183" },
            { value: "124" },
            { value: "100" }
        ]
    },
    {
        type: "valueColumn-t04-2",
        className: "valueColumn",
        cells: [
            { value: "", className: "heading none-heading" },
            { value: "AC", className: "val2Heading" },
            { value: "499", className: "bold" },
            { value: "187" },
            { value: "123" },
            { value: "101" }
        ]
    },
    {
        type: "chartColumn",
        className: "chartColumn",
        cells: [
            { value: "", className: "heading" },
            { value: "Δ PY", className: "PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 5,
                        width: 26,
                        text: "+12",
                        className: "bold"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 5,
                        width: 19,
                        text: "+4"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#FF000A",
                        borderWidth: "2",
                        opacity: 2,
                        x: 29,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "-1"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 36,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "+1"
                    }
                }
            }
        ]
    },
    {
        type: "chartColumn-1",
        className: "chartColumn",
        cells: [
            { value: "", className: "heading" },
            { value: "Δ PY %", className: "del-PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true,
                        className: "bold"
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 30,
                        y: 5,
                        height: 3,
                        width: 12
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 30,
                        y: 5,
                        height: 3,
                        width: 12
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 12,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "-2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#FF000A",
                        opacity: 2,
                        x: 14,
                        y: 5,
                        height: 3,
                        width: 16
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 30,
                        y: 5,
                        height: 3,
                        width: 12
                    }
                }
            }
        ]
    }
];

const T05Data: IchartColumn[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "", className: "none" },
            { value: "", className: "none" },
            { value: "Beverages", className: "bold" },
            { value: "Tea", className: "childRow" },
            { value: "Milk", className: "childRow" },
            { value: "Horlicks", className: "childRow" }
        ]
    },
    {
        type: "valueColumn-t05-1",
        className: "valueColumn",
        cells: [
            { value: "USA", className: "heading" },
            { value: "PY", className: "cell val2Heading" },
            { value: "487", className: "cell bold" },
            { value: "183", className: "cell" },
            { value: "124", className: "cell" },
            { value: "100", className: "cell" }
        ]
    },
    {
        type: "chartColumn-2",
        className: "chartColumn-1",
        cells: [
            { value: "", className: "heading" },
            { value: "AC", className: "AC-heading" },
            {
                path: {
                    rect1: {
                        color: "#333333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 5,
                        width: 8,
                        text: "+12",
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "+4",
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 11,
                        y: 5,
                        height: 5,
                        width: 3,
                        text: "-1",
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 15,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "+1",
                        secondType: true
                    }
                }
            }
        ]
    },
    {
        type: "chartColumn",
        className: "chartColumn",
        cells: [
            { value: "", className: "heading" },
            { value: "Δ PY", className: "PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 18,
                        y: 5,
                        height: 5,
                        width: 17,
                        text: "+12"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 18,
                        y: 5,
                        height: 5,
                        width: 10,
                        text: "+4"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#FF000A",
                        borderWidth: "2",
                        opacity: 2,
                        x: 12,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "-1"
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#8EB900",
                        borderWidth: "2",
                        opacity: 2,
                        x: 18,
                        y: 5,
                        height: 5,
                        width: 5,
                        text: "+1"
                    }
                }
            }
        ]
    },
    {
        type: "chartColumn-1",
        className: "chartColumn",
        cells: [
            { value: "", className: "heading" },
            { value: "Δ PY %", className: "del-PY-heading" },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 29,
                        y: 5,
                        height: 3,
                        width: 12,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 12,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "-2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#FF000A",
                        opacity: 2,
                        x: 14,
                        y: 5,
                        height: 3,
                        width: 16,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 29,
                        y: 5,
                        height: 3,
                        width: 12,
                        secondType: true
                    }
                }
            },
            {
                path: {
                    rect1: {
                        color: "#333",
                        borderWidth: "2",
                        opacity: 2,
                        x: 40,
                        y: 5,
                        height: 3,
                        width: 3,
                        text: "+2%",
                        secondType: true
                    },
                    rect2: {
                        color: "#8EB900",
                        opacity: 2,
                        x: 29,
                        y: 5,
                        height: 3,
                        width: 12,
                        secondType: true
                    }
                }
            }
        ]
    }
];


const spreadSheetData: ISampleData[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "" },
            { value: "" },
            { value: "United States", className: "parentRow" },
            { value: "East",className: "parentRow secColum" },
            { value: "Central",className: "parentRow thirColum"  },
            { value: "Midwest",className: "parentRow fourColum"  },
            { value: "Pacific",className: "parentRow fivethColum"  },
            {value:" subtotal",className:"subtotalsRow header"}
        ]
    },
    {
        type: "ac",
        className: "moving",
        cells: [
            { value: "2020", className: "Right" },
            { value: "Sales" },
            { value: "499k", className: "parentRow" },
            { value: "183k" ,className: "parentRow secColum" },
            { value: "124k",className: "parentRow thirColum"  },
            { value: "100k" ,className: "parentRow fourColum" },
            { value: "80k" ,className: "parentRow fivethColum"  },
            {value:" ",className:"subtotalsRow"}
        ]
    },
    {
        type: "py",
        className: "moving",
        cells: [
            { value: "" },
            { value: "Quantity" },
            { value: "6687", className: "parentRow" },
            { value: "2477"  ,className: "parentRow secColum"},
            { value: "1715",className: "parentRow thirColum"  },
            { value: "1319",className: "parentRow fourColum"  },
            { value: "1176",className: "parentRow fivethColum"   },
            {value:" ",className:"subtotalsRow"}
        ]
    },
    {
        type: "del_py",
        className: "moving",
        cells: [
            { value: "" },
            { value: "#Stores" },
            { value: "951", className: "parentRow" },
            { value: "322" ,className: "parentRow secColum" },
            { value: "273",className: "parentRow thirColum"  },
            { value: "213" ,className: "parentRow fourColum" },
            { value: "143",className: "parentRow fivethColum"   },
            {value:" ",className:"subtotalsRow"}
        ]
    },
    {
        type: "del_py%",
        className: " ",
        cells: [
            { value: "" },
            { value: "Yoy Oty" },
            { value: "16.7%", className: "parentRow" },
            { value: "14.8%" ,className: "parentRow secColum" },
            { value: "-6.4%",className: "parentRow thirColum"  },
            { value: "-1.2%",className: "parentRow fourColum"  },
            { value: "21.5%",className: "parentRow fivethColum"   },
            {value:" ",className:"subtotalsRow"}
        ]
    },
    {
        type: "subtotal",
        className: "labelColumn-lefthidden",
        cells: [
            { value: " " },
            { value: "subtotals"},
            { value: " ", className: "parentRow" },
            { value: " " ,className: "parentRow secColum" },
            { value: " ",className: "parentRow thirColum" },
            { value: " ",className: "parentRow fourColum"  },
            { value: " ",className: "parentRow fivethColum"   },
            {value:" ",className:"subtotalsRow"}
        ]
    },
    {
        type: "grandtotal",
        className: "labelColumn-lefthidden",
        cells: [
            { value: " " },
            { value: "grandtotals"},
            { value: " ", className: "parentRow" },
            { value: " " ,className: "parentRow secColum" },
            { value: " ",className: "parentRow thirColum" },
            { value: " ",className: "parentRow fourColum"  },
            { value: " ",className: "parentRow fivethColum"   },
            {value:" ",className:"subtotalsRow"}
        ]
    },

     

];



// spreadSheetData.forEach(element => {
//     if (element.type === "del_py%") {
//         element.className = 'moving '
//     }
//     console.log(spreadSheetData)
// })

const matrixData: ISampleData[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "" },
            { value: "Category" },
            { value: "United States", className: "parentRow" },
            { value: "East", className: "childRow evenRow" },
            { value: "Central", className: "childRow" },
            { value: "Midwest", className: "childRow evenRow" }
        ]
    },
    {
        type: "ac",
        cells: [
            { value: "Beverages", className: "alignLeft" },
            { value: "Juice" },
            { value: "487", className: "parentRow" },
            { value: "183", className: "evenRow" },
            { value: "124" },
            { value: "100", className: "evenRow" }
        ]
    },
    {
        type: "py",
        cells: [
            { value: "" },
            { value: "Soda" },
            { value: "499", className: "parentRow" },
            { value: "187", className: "evenRow" },
            { value: "123" },
            { value: "101", className: "evenRow" }
        ]
    },
    {
        type: "del_py",
        cells: [
            { value: "" },
            { value: "Coffee" },
            { value: "326", className: "parentRow" },
            { value: "956", className: "evenRow" },
            { value: "713" },
            { value: "56", className: "evenRow" }
        ]
    },
    {
        type: "del_py%",
        cells: [
            { value: "" },
            { value: "Water" },
            { value: "168", className: "parentRow" },
            { value: "730", className: "evenRow" },
            { value: "264" },
            { value: "198", className: "evenRow" }
        ]
    }
];

const financialData: ISampleData[] = [
    {
        type: "labelColumn",
        className: "labelColumn",
        cells: [
            { value: "" },
            { value: "Revenue", className: "parentRow" },
            { value: "Cost of goods", className: "childRow " },
            { value: "Expenses", className: "childRow" },
            { value: "Interest & taxes", className: "childRow" },
            { value: "Net income", className: "parentRow" },
            { value: "Net income %", className: "childRow" },
            { value: "Earnings per share", className: "parentRow" },
            { value: "subtotal", className: " subtotalfins header" }

        ]
    },
    {
        type: "ac",
        cells: [
            { value: "2020" },
            { value: "437", className: "parentRow" },
            { value: "184" },
            { value: "202" },
            { value: "11" },
            { value: "40", className: "parentRow" },
            { value: "9.2%" },
            { value: "1.34", className: "parentRow" },
            { value: " ", className: " subtotalfins " }
        ]
    },
    {
        type: "py",
        cells: [
            { value: "2021" },
            { value: "373", className: "parentRow" },
            { value: "164" },
            { value: "146" },
            { value: "9" },
            { value: "54", className: "parentRow" },
            { value: "14.5%" },
            { value: "1.45", className: "parentRow" },
            { value: " ", className: " subtotalfins " }
        ]
    },
    {
        type: "subtotal",
        className:" ",
        cells: [
            { value: " subtotal" },
            { value: " ", className: "parentRow" },
            { value: " " },
            { value: " " },
            { value: " " },
            { value: " ", className: "parentRow" },
            { value: " " },
            { value: " ", className: "parentRow" },
            { value: " ", className: " subtotalfins " }

        ]
    },
    {
        type: "grandtotal",
        className:" ",
        cells: [
            { value: " grandtotal" },
            { value: " ", className: "parentRow" },
            { value: " " },
            { value: " " },
            { value: " " },
            { value: " ", className: "parentRow" },
            { value: " " },
            { value: " ", className: "parentRow" },
            { value: " ", className: " subtotalfins " }
            
        ]
    },
];

const getTableTemplate = (tableData: ITableData[]) => {

    return tableData.map((data: any) => {
        return (
            <div
                key={data.type}
                className={`chart_data_column ${data.className ? data.className : ""}`}
            >
               <span className="tttf"> {data.cells.map((cell: any, index: any) => {
                    return (
                        <span key={`${cell.value1}__${cell.value2}__${index}`}>
                            <span className={`${cell.className1 ? cell.className1 : ""}`}>
                                {cell.value1}
                            </span>
                            <span className={`${cell.className2 ? cell.className2 : ""}`}>
                                {cell.value2}
                            </span>
                        </span>
                    );
                })}</span>
            </div>
        );
    });
};

const getChartTemplate = (
    templateData: IchartColumn[],
    templateClassName: string
) => {
    return templateData.map((data: any) => {
        return (
            <div
                key={data.type}
                className={`chart_data_column ${data.className ? data.className : ""}`}
            >
                {data.cells.map((cell: any, index: any) => {
                    const isChartColumn =
                        data.type === "chartColumn" ||
                        data.type === "chartColumn-1" ||
                        data.type === "chartColumn-2";
                    const rect1 = cell.path?.rect1;
                    const lineX =
                        templateClassName == "t02"
                            ? 16
                            : templateClassName == "t05"
                                ? rect1?.secondType
                                    ? 30
                                    : 18
                                : rect1?.secondType
                                    ? 30
                                    : 14;
                    return (
                        <React.Fragment key={index + "_" + cell.value}>
                            {!isChartColumn ? (
                                <span>
                                    <span className={`${cell.className ? cell.className : ""}`}>
                                        {cell.value}
                                    </span>
                                </span>
                            ) : (
                                <span style={{ maxHeight: "14px" }}>
                                    {cell.value || index == 0 ? (
                                        <span className={`${cell.className ? cell.className : ""}`}>
                                            {cell.value}
                                        </span>
                                    ) : (
                                        <svg
                                            height={14}
                                            width={60}
                                            preserveAspectRatio={"xMidYMid meet"}
                                            transform={"translate(0,0)"}
                                            style={{ padding: 0, margin: 0 }}
                                        >
                                            {/* {getAxisLines(lineX, data.type)} */}
                                            <Rect
                                                width={rect1?.width}
                                                height={rect1?.height}
                                                color={rect1?.color}
                                                borderColor={rect1?.color}
                                                borderWidth={rect1?.borderWidth}
                                                y={rect1?.y}
                                                x={rect1?.x}
                                            />
                                            {cell.path?.rect2 ? (
                                                <Rect
                                                    width={cell.path?.rect2?.width}
                                                    height={cell.path?.rect2?.height}
                                                    color={cell.path?.rect2?.color}
                                                    y={cell.path?.rect2?.y}
                                                    x={cell.path?.rect2?.x}
                                                />
                                            ) : null}
                                            {/* {templateClassName == "t05"
                                                ? null
                                                : getConnecterLines(cell, index)}
                                            {getText(cell, data.type, index)} */}
                                        </svg>
                                    )}
                                </span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    });
};

//main component
const TemplateSampleData = (props: TemplateSampleData) => {
    const {subTotalColumnValue,subTotalRowValue,grandTotalColumnValue}:any = useContext(UserContext);
    console.log(subTotalColumnValue,subTotalRowValue)
    
    if(subTotalColumnValue=="right"){
        let m=spreadSheetData.map((e)=>{
            if((spreadSheetData[spreadSheetData.length-2] && spreadSheetData[0] )!=e)
            e.className="movesRIght"
        })
        let j=financialData.map((f)=>{
            if((financialData[financialData.length-2] && financialData[0])!=f)
            f.className="moverightfins"
        })
    spreadSheetData[spreadSheetData.length-2].className="rightside"
    financialData[financialData.length-2].className="rightsfinas"
    }
    else if (subTotalColumnValue=="left") {
         let m=spreadSheetData.map((e)=>{
            if((spreadSheetData[spreadSheetData.length-2] && spreadSheetData[0] )!=e)
            e.className="moves"
        })
        let j=financialData.map((f)=>{
            if((financialData[financialData.length-2] && financialData[0])!=f)
            f.className="moveleftsfins"
        })
        spreadSheetData[spreadSheetData.length-2].className=subTotalColumnValue 
        financialData[financialData.length-2].className="leftsfinas"  
        
    }
    else if(subTotalColumnValue=="off") {
        let m=spreadSheetData.map((e)=>{
            if((spreadSheetData[spreadSheetData.length-2] && spreadSheetData[0] )!=e)
            e.className="movesRIght"
        })
        let j=financialData.map((f)=>{
            if((financialData[financialData.length-2] && financialData[0])!=f)
            f.className="moverightfins"
        })
        spreadSheetData[spreadSheetData.length-2].className="hidden"
        financialData[financialData.length-2].className="hidden"
        }
    
     if(subTotalRowValue==="above"){
        // for(let i=0;i<financialData.length;i++){
            
        //     let m=financialData.map((e)=>{
        //         if((financialData[i].cells[financialData[i].cells.length]) && (financialData[i].cells[0]) !=financialData[i].cells[financialData[i].cells.length-2])
        //         e.cells[financialData[i].cells.length].className="moveTopSIdeBELOW"
        //     })
        //     let g=financialData[i].cells[financialData[i].cells.length-1].className="moveTopSide"
        // } 

        // for(let i=0;i<financialData.length;i++){
        //     financialData[i].cells.splice(1,0,financialData[i].cells[financialData[i].cells.length-2])
        //     // financialData[i].cells.pop()
        //    let r=financialData[i].cells[financialData[i].cells.length-2].className=" "
        // }

        // function updateCell(oldArray:any,newclassName:any){
        //     function updateValue(oldArray:any,newclassName:any){
        //         if(oldArray.className == undefined){
        //             oldArray["className"]= newclassName
        //         }
        //         else{
        //             oldArray["className"] = newclassName
        //         }
              
        //         return oldArray
                
        //     }
        
        //     for(let i=1;i<oldArray.length-1;i++){
        //         oldArray[i] = updateValue(oldArray[i],newclassName)
        //    }
        
        //    return oldArray
           
        // }
        
        
//         for(let j=0;j<financialData.length;j++){
//             financialData[j].cells = updateCell(financialData[j].cells,"chnageddddd")
//         }
        
//         financialData.map((e) => console.log(e.cells))
       

//     }
    

//    else if (subTotalRowValue=="clear"){
//     for(let i=0;i<financialData.length;i++){
//        let  r=financialData[i].cells[financialData[i].cells.length-1].className="hidden"
//         }
//         for(let i=0;i<spreadSheetData.length;i++ ){
//             let m=spreadSheetData[i].cells[spreadSheetData[i].cells.length-1].className="hidden"
//         }
//    }
//    if(grandTotalColumnValue==true){
//     spreadSheetData[spreadSheetData.length-1].className="rightsidesss"
//     financialData[financialData.length-1].className="rightsfinassss" 
//    }
//    else{
//     spreadSheetData[spreadSheetData.length-1].className="hidden"
//     financialData[financialData.length-1].className="hidden"
//    }

     }


   console.log(financialData)
    // console.log(subTotalColumnValue,"aJDGAYWfgjhacjhzbJSgcuaFYUFGAgcsuaygWYASGFUYagdg")
    // console.log(spreadSheetData,"SAHjAJHCHAHCC")
    const { templateType } = props;

    const templateClassName = templateType.toLowerCase();
    const currentData: ISampleData[] =
        templateType === ETemplate.Spreadsheet
            ? spreadSheetData
            : templateType === ETemplate.MATRIX
                ? matrixData
                : financialData;
    const isStandardTemplate = templateType === ETemplate.Standard;
    const isTableTemplate =
        templateClassName === "t03" || templateClassName === "t01";
    const isChartTemplate =
        templateClassName === "t04" ||
        templateClassName === "t05" ||
        templateClassName === "t02";
    const chartTemplate: IchartColumn[] =
        templateType === ETemplate.T04
            ? T04Data
            : templateType === ETemplate.T05
                ? T05Data
                : T02Data;
    const tableTemplate: ITableData[] =
        templateType === ETemplate.T03 ? T03data : T01data;

    return (
        <div className={`template_sample_data  ${templateClassName}`}>
            {isTableTemplate ? (
                getTableTemplate(tableTemplate)
            ) : isChartTemplate ? (
                getChartTemplate(chartTemplate, templateClassName)
            ) : (
                <div className={`template_sample_data  ${templateClassName}`}>
                    {currentData.map((data) => {
                        return (
                            <div
                                key={data.type}
                                className={`data_column ${data.className ? data.className : ""
                                    }`}
                            >
                                {data.cells.map((cell, index) => {
                                    const standardPrefixData =
                                        isStandardTemplate && ["ac", "py"].includes(data.type);

                                    return (
                                        <span
                                            key={index + "_" + cell.value}
                                            className={`${cell.className ? cell.className : ""}`}
                                        >
                                            {standardPrefixData ? (
                                                <span
                                                    className={`${cell.className ? "" : "cellPrefix"}`}
                                                >
                                                    $
                                                </span>
                                            ) : null}
                                            {cell.value}
                                        </span>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TemplateSampleData;
