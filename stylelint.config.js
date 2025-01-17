export default {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss'
        },
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html'
        }
    ],
    rule: {
        //标签选择器最多1个
        'selector-max-type': 1,
        //限制选择器的数量
        'selector-max-compound-selectors': 2,
        //规则块之间要有空行
        'rule-empty-line-before': [
            'always',
            {
                except: ['after-single-line-comment', 'inside-block-and-after-rule', 'first-nested']
            }
        ]
    }
}
