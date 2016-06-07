# [WebStorm/PhpStorm][webstorm-1] configuration for Standard Style

1. Turn off your IDE
2. [Figure out where your configuration lives][webstorm-2] (_IDE Settings_ section)
3. Navigate to `your-config-dir/codestyles`. If this directory doesn't exist, create it in the WebStorm
config settings directory
4. Create a `Standard.xml` file:

  ```xml
    <code_scheme name="Standard">
      <JSCodeStyleSettings>
        <option name="USE_SEMICOLON_AFTER_STATEMENT" value="false" />
        <option name="USE_DOUBLE_QUOTES" value="false" />
        <option name="SPACES_WITHIN_OBJECT_LITERAL_BRACES" value="true" />
        <option name="SPACES_WITHIN_IMPORTS" value="true" />
      </JSCodeStyleSettings>
      <XML>
        <option name="XML_LEGACY_SETTINGS_IMPORTED" value="true" />
      </XML>
      <codeStyleSettings language="JavaScript">
        <option name="KEEP_BLANK_LINES_IN_CODE" value="1" />
        <option name="SPACE_WITHIN_BRACKETS" value="true" />
        <option name="SPACE_BEFORE_METHOD_PARENTHESES" value="true" />
        <option name="KEEP_SIMPLE_BLOCKS_IN_ONE_LINE" value="true" />
        <option name="KEEP_SIMPLE_METHODS_IN_ONE_LINE" value="true" />
        <indentOptions>
          <option name="INDENT_SIZE" value="2" />
          <option name="CONTINUATION_INDENT_SIZE" value="2" />
          <option name="TAB_SIZE" value="2" />
        </indentOptions>
      </codeStyleSettings>
    </code_scheme>
  ```

5. You may install dependencies and config globaly or localy and with support of ES7 or without it.
  * **Local** install **with** support of ES7
    * `npm install eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise babel-eslint` (`sudo` might be required)
    * `echo '{"extends": ["standard"], "parser": "babel-eslint"}' > .eslintrc` (be warned: it overrides an existing file)
  * **Local** install **without** support of ES7
    * `npm install eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise` (`sudo` might be required)
    * `echo '{"extends": ["standard"]}' > .eslintrc` (be warned: it overrides an existing file)<br />
  * **Global** install **with** support of ES7
      * `npm install -g eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise babel-eslint` (`sudo` might be required)
      * `echo '{"extends": ["standard"], "parser": "babel-eslint"}' > ~/.eslintrc` (be warned: it overrides an existing
  * **Global** install **without** support of ES7
    * `npm install -g eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise` (`sudo` might be required)
    * `echo '{"extends": ["standard"]}' > ~/.eslintrc` (be warned: it overrides an existing file)
6. Fire up the IDE and open a _Settings_/_Preferences_ screen (choose between project and default settings accordingly to your preference)
7. Under `Editor > Code Style > JavaScript` change `Scheme` to `Standard`
8. Under `Editor > Inspections > JavaScript > Code style issues` untick `Unterminated statement`
9. Under `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` just select `Enable`, only in rare cases you'll have to configure `ESLint package` path

---

If you're a Webstorm/PhpStorm users, [vote for `standard` to be one of the default styles][webstorm-3]
built into the app.

[webstorm-1]: https://www.jetbrains.com/webstorm/
[webstorm-2]: https://www.jetbrains.com/help/phpstorm/2016.1/directories-used-by-phpstorm-to-store-settings-caches-plugins-and-logs.html?origin=old_help#d66583e60
[webstorm-3]: https://youtrack.jetbrains.com/issue/WEB-17331
