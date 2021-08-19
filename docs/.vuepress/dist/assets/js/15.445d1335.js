(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{389:function(t,e,r){"use strict";r.r(e);var a=r(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"ichinae-core-plugins-report"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ichinae-core-plugins-report"}},[t._v("#")]),t._v(" ichinae-core-plugins-report")]),t._v(" "),r("h2",{attrs:{id:"插件说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件说明"}},[t._v("#")]),t._v(" 插件说明")]),t._v(" "),r("p",[t._v("报表插件提供快速生成在线Html5报表，并提供报表下载及分页静默打印功能，打印支持分页自动添加表头打印。")]),t._v(" "),r("ul",[r("li",[t._v("报表插件1.0.0目前支持Spring Boot 2.0.2.RELEASE版本")]),t._v(" "),r("li",[t._v("报表插件1.0.1-SNAPSHOT目前支持Spring Boot 2.1.2.RELEASE版本")]),t._v(" "),r("li",[t._v("报表展示效果如下：\n"),r("img",{attrs:{src:"/tools/report_demo.png",alt:"report_demo.png"}})]),t._v(" "),r("li",[t._v("表头斜线报表展示效果如下：\n"),r("img",{attrs:{src:"/tools/report_demo2.png",alt:"report_demo2.png"}})]),t._v(" "),r("li",[t._v("打印预览如下：\n"),r("img",{attrs:{src:"/tools/report_print_review.png",alt:"report_print_review.png"}})]),t._v(" "),r("li",[t._v("导出Excel预览如下：\n"),r("img",{attrs:{src:"/tools/report_excel.png",alt:"report_excel.png"}})])]),t._v(" "),r("h2",{attrs:{id:"如何使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),r("p",[t._v("1.在pom文件中引入依赖，目前最新版本为：1.0.0")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    <dependency>\n        <groupId>com.ichinae.core.plugins</groupId>\n        <artifactId>ichinae-core-plugins-report</artifactId>\n        <version>1.0.0</version>\n    </dependency>\n")])])]),r("p",[t._v("2.在项目properties/ymal配置文件中添加如下配置:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v(".perperties配置如下：\n# freemarker配置\nspring.freemarker.request-context-attribute=req\nspring.freemarker.suffix=.html\nspring.freemarker.content-type=text/html\nspring.freemarker.enabled=true\nspring.freemarker.cache=false\nspring.freemarker.template-loader-path=classpath:/templates/\nspring.freemarker.charset=UTF-8\nspring.freemarker.settings.number_format=0.##\n\n#项目模板配置\n# tpl模板存放路径，tpl模板可在集团项目脚手架获取\nzdxf.report.tpl=D:/tmp/report/tpl\n# excel模板存放路径\nzdxf.report.template=D:/tmp/report/template\n# 导出Excel临时目录\nzdxf.report.genPath=D:/tmp/report/download\n\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v(".yml配置如下：\nspring:\n  freemarker:\n    cache: false\n    charset: UTF-8\n    content-type: text/html\n    enabled: true\n    request-context-attribute: req\n    settings:\n      number_format: 0.##\n    suffix: .html\n    template-loader-path: classpath:/templates/\nzdxf:\n  report:\n    genPath: D:/tmp/report/download\n    template: D:/tmp/report/template\n    tpl: D:/tmp/report/tpl\n")])])]),r("p",[t._v("3.报表Excel模板示例如下所示：\n"),r("img",{attrs:{src:"/tools/report_excel_template.png",alt:"report_excel_template.png"}})]),t._v(" "),r("p",[t._v("4.后台调用create接口生成报表数据，反参为businessKey，供报表绘制Draw方法使用。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('http://localhost:8850/XXX/report/create\n该接口为POST接口，请求参数如下\n{    \n    "fileName":"ticket",\n    "headerValues":[\n        {\n            "label":"统计时间:",\n            "value":"2020-01-01 00:00:00--2020-11-30 16:45:40"\n        },\n        {\n            "label":"售票员:",\n            "value":"标准测试"\n        },\n        {\n            "label":"打印时间:",\n            "value":"2020-11-30 16:45:40"\n        }\n    ],\n    "pageSize":13,\n    "headerRows":4,\n    "showIndexs":[\n        0,\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9\n    ],\n"values":[\n        "散客票/rp=4;奇梁洞门票;标准票;5.00;5;0;5;25.00;0.00;25.00",\n        " 散客票;app车票0818;儿童票;20.00;1;0;1;20.00;0.00;20.00",\n        " 散客票;接驳车通票;标准票;10.00;4;0;4;40.00;0.00;40.00",\n        " 散客票;测试0826;标准票;30.00;2;0;2;130.00;0.00;130.00",\n        " 团体票;小计/cp=3;_;_;6;0;6;56.00;0.00;56.00",\n        " 合计1/rp=5;奇梁洞门票;标准票;5.00;5;0;5;25.00;0.00;25.00",\n        " 合计;app车票0818;儿童票;20.00;1;0;1;20.00;0.00;20.00",\n        " 合计;接驳车通票;标准票;10.00;4;0;4;40.00;0.00;40.00",\n        " 合计;测试0826;标准票;30.00;2;0;2;130.00;0.00;130.00",\n        " 合计;舞蹈芭蕾;标准票;2.00;1;1;0;2.00;2.00;0.00",\n        " 现金/rp=3;现金收款(￥)/cp=3;_;_;716.06/cp=6;",\n        " 现金;现金退款(￥)/cp=3;_;_;142.00/cp=6;",\n        " 现金;现金交付(￥)/cp=3;_;_;574.06/cp=6;",\n        " 身份证;小计/cp=3;_;_;18;1;17;155.11;100.00;55.11",\n        " 纸质票;小计/cp=3;_;_;55;3;52;571.05;42.00;529.05"\n    ]\n}\n')])])]),r("h2",{attrs:{id:"参数数据说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数数据说明"}},[t._v("#")]),t._v(" 参数数据说明")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fileName：       （必填）excel模板文件名也是导出后的文件名，导出后文件名为fileName+时间戳.xls\nheaderValues：   （可填）报表头部自定义信息\npageSize:       (必填）报表每页行数，包含模板的表头和数据行数，不包含自定义表头。\nheaderRows：     （必填）模板表头终止行的行标，即NA上级行号。\nshowIndexs：     （可填）显示列信息，若不填则显示模板配置的所有列数据。\nvalues:         （必填）报表业务数据。\n")])])]),r("p",[t._v("values配置规则")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("values为字符数组，每行用逗号分割。每行内每个单元格数据用分号分割。单元格跨行用/rp标识，比如散客票/rp=4即散客票夸4行。跨列用cp标识，比如小计/cp=3即小计夸3列。\n若表头需要斜线用\\\\配置，如excel模板中配置项目\\\\名称即生成斜线分割。在values数据层若导出需要斜线则须转义，用\\\\\\\\配置。\n\n")])])]),r("p",[t._v("5.draw渲染图形,Get请求，入参为Create返回的businessKey，返回为渲染的html报表页面。渲染采用Freemarker渲染机制，需要table.tpl模板，可在第五点中获取模板，或可在项目脚手架中获取。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("http://localhost:8850/park-core/report/draw/1606793696191\n")])])]),r("p",[t._v("绘制效果如下：\n"),r("img",{attrs:{src:"/tools/report_draw.png",alt:"report_draw"}})]),t._v(" "),r("h2",{attrs:{id:"_4-table-tpl模板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-table-tpl模板"}},[t._v("#")]),t._v(" 4. table.tpl模板")]),t._v(" "),r("p",[t._v("注意，该不要修改！项目中直接使用！！路径在项目资源文件中zdxf.report.tpl配置。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('<div style="padding:80px 25px;position:relative;">\n    <table width=\'100%\' cellspacing="0" border="0">\n    <#list headers as tr>\n        <tr>\n            <#list tr.tds as td>\n                <td style="${td.style}" class="${td.cls}" ${td.colSpan} ${td.rowSpan}>${td.data}</td>\n            </#list>\n        </tr>\n    </#list>\n    <#list rows as tr>\n        <tr>\n            <#list tr.tds as td>\n                <td style="${td.style}" ${td.colSpan} ${td.rowSpan}>${td.data}</td>\n            </#list>\n        </tr>\n    </#list>\n    </table>\n\t<div style="bottom: 5px; position: fixed; background-color: #FFFFFF; text-align: center; left: 10%; right: 10%;">\n\t\t${pageDesc}\n\t</div>\n</div>\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);