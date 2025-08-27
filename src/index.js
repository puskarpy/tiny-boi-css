import { fontSizes, fontFamily, fontWeight, colors, box, flexProp, rounded, gap, border } from './config.js'

let css = '*{\n\tborder:0;\n\tborder-style:solid;\n\tborder-color:black;\n}\n'

for(const [name, value] of Object.entries(fontSizes)){
    css += `.text-${name}{\n\tfont-size:${value};\n}\n`
}
for(const [name, value] of Object.entries(fontFamily)){
    css += `.font-${name}{\n\tfont-family:${value};\n}\n`
}
for(const [name, value] of Object.entries(fontWeight)){
    css += `.text-${name}{\n\tfont-weight:${value};\n}\n`
}
for(const [name, value] of Object.entries(colors)){
    css += `.text-${name}{\n\tcolor:${value};\n}\n`
    css += `.bg-${name}{\n\tbackground-color:${value};\n}\n`
    css += `.border-${name}{\n\tborder-color:${value};\n}\n`
    css += `.border-t-${name}{\n\tborder-color:${value};\n}\n`
    css += `.border-b-${name}{\n\tborder-color:${value};\n}\n`
    css += `.border-r-${name}{\n\tborder-color:${value};\n}\n`
    css += `.border-l-${name}{\n\tborder-color:${value};\n}\n`
}
for(const [name, value] of Object.entries(colors)){
    css += `.bg-${name}{\n\tbackground-color:${value};\n}\n`
}
for(const [name, value] of Object.entries(box)){
    // Padding
    css += `.p-${name}{\n\tpadding:${value};\n}\n`
    css += `.px-${name}{\n\tpadding-left:${value};\n\tpadding-right:${value};\n}\n`
    css += `.pl-${name}{\n\tpadding-left:${value};\n}\n`
    css += `.pr-${name}{\n\tpadding-right:${value};\n}\n`
    css += `.pt-${name}{\n\tpadding-top:${value};\n}\n`
    css += `.pb-${name}{\n\tpadding-bottom:${value};\n}\n`
    css += `.py-${name}{\n\tpadding-top:${value};\n\tpadding-bottom:${value};\n}\n`

    // Margin
    css += `.m-${name}{\n\tmargin:${value}\n}\n`
    css += `.ml-${name}{\n\tmargin-left:${value};\n}\n`
    css += `.mr-${name}{\n\tmargin-right:${value};\n}\n`
    css += `.mt-${name}{\n\tmargin-top:${value};\n}\n`
    css += `.mb-${name}{\n\tmargin-bottom:${value};\n}\n`
    css += `.mx-${name}{\n\tmargin-left:${value};\n\tmargin-right:${value};\n}\n`
    css += `.my-${name}{\n\tmargin-top:${value};\n\tmargin-bottom:${value};\n}\n`
}

for(const [name, value] of Object.entries(flexProp)){
    css += `.${name}{\n\t${value};\n}\n`
}

for(const [name, value] of Object.entries(rounded)){
    css += `.rounded-${name}{\n\tborder-radius:${value};\n}\n`
}

for(const [name, value] of Object.entries(gap)){
    css += `.gap-${name}{\n\tgap:${value};\n}\n`
}
for(const [name, value] of Object.entries(border)){
    css += `.border-${name}{\n\tborder-width:${value};\n}\n`
    css += `.border-t-${name}{\n\tborder-top-width:${value};\n}\n`
    css += `.border-b-${name}{\n\tborder-bottom-width:${value};\n}\n`
    css += `.border-r-${name}{\n\tborder-right-width:${value};\n}\n`
    css += `.border-l-${name}{\n\tborder-left-width:${value};\n}\n`
}

export {css};
