import axios from 'axios';
import { useState } from 'react';
import {
  Plate,
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  createParagraphPlugin,
  createBlockquotePlugin,
  createTodoListPlugin,
  createHeadingPlugin,
  createImagePlugin,
  createHorizontalRulePlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createTablePlugin,
  createMediaEmbedPlugin,
  // createExcalidrawPlugin,
  createCodeBlockPlugin,
  createAlignPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createHighlightPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createFontBackgroundColorPlugin,
  createFontFamilyPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createKbdPlugin,
  createNodeIdPlugin,
  createIndentPlugin,
  createAutoformatPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createExitBreakPlugin,
  createNormalizeTypesPlugin,
  createTrailingBlockPlugin,
  createSelectOnBackspacePlugin,
  createComboboxPlugin,
  createMentionPlugin,
  createDeserializeMdPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  // createJuicePlugin,
  createPlugins,
  createPlateUI,
  withPlaceholders,
  MentionCombobox,
  usePlateEditorRef,
  MarkToolbarButton,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  BalloonToolbar,
  HeadingToolbar,
  MediaEmbedToolbarButton,
} from '@udecode/plate';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';

import { CONFIG } from './config/config';
import {
  BasicElementToolbarButtons,
  ListToolbarButtons,
  IndentToolbarButtons,
  BasicMarkToolbarButtons,
  // ColorPickerToolbarDropdown,
  // ColorPickerToolbarDropdown,
  // AlignToolbarButtons,
  // LineHeightToolbarDropdown,
  // LinkToolbarButton,
  // ImageToolbarButton,
  // MediaEmbedToolbarButton,
} from './config/components/Toolbars';
// import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Tooltip } from '@mui/material';

interface IProps {
  id?: any;
  onChange?: any;
  value?: any;
  // children?: any;
}

function b64toBlob(b64Data: any, contentType?: any, sliceSize?: any) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export default function CustomPlate(props: IProps) {
  const [showToolbar, setShowToolbar] = useState(false);

  const cbUploadImage = async (data: any) => {
    // Split the base64 string in data and contentType
    const block = data.split(';');
    // Get the content type of the image
    const contentType = block[0].split(':')[1]; // In this case "image/gif"
    // get the real base64 content of the file
    const realData = block[1].split(',')[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
    // Convert it to a blob to upload
    const blob = b64toBlob(realData, contentType);

    const dataRequest = new FormData();
    dataRequest.append(
      'auth_token',
      '970165a01aa329064b5154c75c6cbc99183ddb8c'
    );
    dataRequest.append('source', blob);
    dataRequest.append('type', 'file');
    dataRequest.append('action', 'upload');
    dataRequest.append('timestamp', JSON.stringify(new Date().getTime()));

    const res = await axios({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      url: 'https://imgbb.com/json',
      method: 'POST',
      data: dataRequest,
    });
    return res.data.image.display_url;
  };

  const BallonToolbarMarks = () => {
    const editor: any = usePlateEditorRef();

    const arrow = false;
    const theme = 'dark';
    const popperOptions: any = {
      placement: 'top',
    };
    const tooltip: any = {
      arrow: true,
      delay: 0,
      duration: [200, 0],
      hideOnClick: false,
      offset: [0, 17],
      placement: 'top',
    };

    return (
      <BalloonToolbar popperOptions={popperOptions} theme={theme} arrow={arrow}>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<FormatBold />}
          tooltip={{ content: 'Bold (???B)', ...tooltip }}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<FormatItalic />}
          tooltip={{ content: 'Italic (???I)', ...tooltip }}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<FormatUnderlined />}
          tooltip={{ content: 'Underline (???U)', ...tooltip }}
        />
      </BalloonToolbar>
    );
  };

  let components = createPlateUI();

  const plugins: any = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin({
        options: {
          uploadImage: cbUploadImage,
        } as any,
      }),
      createHorizontalRulePlugin(),
      createLineHeightPlugin(CONFIG.lineHeight),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(CONFIG.align),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontBackgroundColorPlugin(),
      createFontFamilyPlugin(),
      createFontColorPlugin(),
      createFontSizePlugin(),
      createFontWeightPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createIndentPlugin(CONFIG.indent),
      createAutoformatPlugin(CONFIG.autoformat),
      createResetNodePlugin(CONFIG.resetBlockType),
      createSoftBreakPlugin(CONFIG.softBreak),
      createExitBreakPlugin(CONFIG.exitBreak),
      createNormalizeTypesPlugin(CONFIG.forceLayout),
      createTrailingBlockPlugin(CONFIG.trailingBlock),
      createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
      createComboboxPlugin(),
      createMentionPlugin(),
      createDeserializeMdPlugin(),
      createDeserializeCsvPlugin(),
      createDeserializeDocxPlugin(),
      // createJuicePlugin(),
    ],
    {
      components,
    }
  );

  return (
    <div className="CustomPlate">
      <Plate editableProps={CONFIG.editableProps} plugins={plugins} {...props}>
        <div
          className={`CustomPlate-ToolbarContainer ${
            showToolbar ? 'show' : 'hide'
          }`}
        >
          <Tooltip title={showToolbar ? 'show' : 'hide'} placement="left">
            <div
              className="CustomPlate-ToolbarContainer-btn"
              onMouseEnter={() => {
                setShowToolbar(true);
              }}
              onMouseLeave={() => {
                setShowToolbar(false);
              }}
            >
              {showToolbar ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </div>
          </Tooltip>

          {showToolbar && (
            <>
              <HeadingToolbar>
                <BasicElementToolbarButtons />
                <ListToolbarButtons />
                <IndentToolbarButtons />
                <BasicMarkToolbarButtons />
                <MediaEmbedToolbarButton icon={<OndemandVideo />} />
              </HeadingToolbar>
              <BallonToolbarMarks />
              <MentionCombobox items={CONFIG.mentionItems} />
            </>
          )}
        </div>
      </Plate>
    </div>
  );
}
