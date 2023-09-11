/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const UndoOutlined: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M7.75008 3.79335C7.75008 2.65081 6.34372 2.1071 5.57516 2.9525L1.75086 7.15915C1.31742 7.63593 1.31742 8.36407 1.75086 8.84085L5.57523 13.0476C6.34381 13.893 7.7502 13.3492 7.75015 12.2067L7.75007 10.4156C7.87372 10.3713 8.04504 10.3296 8.26864 10.3046C8.6234 10.2648 9.06039 10.2728 9.54403 10.3468C10.5135 10.4953 11.6106 10.9 12.5478 11.6324C12.9632 11.957 13.5008 11.9913 13.9201 11.7931C14.1345 11.6918 14.3396 11.5188 14.4668 11.2679C14.5983 11.0085 14.6205 10.7159 14.5441 10.4364C14.0886 8.77209 12.944 7.53151 11.645 6.69291C10.4117 5.89663 8.99178 5.42988 7.75008 5.29284L7.75008 3.79335ZM3.01365 8L6.25008 4.43999V5.50004C6.25008 6.20318 6.81079 6.71621 7.43588 6.76917C8.48074 6.85769 9.74589 7.25226 10.8314 7.95309C11.6363 8.47273 12.3134 9.14059 12.7442 9.94772C11.767 9.35237 10.719 9.00928 9.77109 8.86412C9.1758 8.77296 8.60515 8.7575 8.10164 8.81391C7.61062 8.86892 7.12792 8.99852 6.7521 9.24278C6.36281 9.4958 6.25004 9.90982 6.25006 10.2072L6.25012 11.56L3.01365 8Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'undo_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M7.75008 3.79335C7.75008 2.65081 6.34372 2.1071 5.57516 2.9525L1.75086 7.15915C1.31742 7.63593 1.31742 8.36407 1.75086 8.84085L5.57523 13.0476C6.34381 13.893 7.7502 13.3492 7.75015 12.2067L7.75007 10.4156C7.87372 10.3713 8.04504 10.3296 8.26864 10.3046C8.6234 10.2648 9.06039 10.2728 9.54403 10.3468C10.5135 10.4953 11.6106 10.9 12.5478 11.6324C12.9632 11.957 13.5008 11.9913 13.9201 11.7931C14.1345 11.6918 14.3396 11.5188 14.4668 11.2679C14.5983 11.0085 14.6205 10.7159 14.5441 10.4364C14.0886 8.77209 12.944 7.53151 11.645 6.69291C10.4117 5.89663 8.99178 5.42988 7.75008 5.29284L7.75008 3.79335ZM3.01365 8L6.25008 4.43999V5.50004C6.25008 6.20318 6.81079 6.71621 7.43588 6.76917C8.48074 6.85769 9.74589 7.25226 10.8314 7.95309C11.6363 8.47273 12.3134 9.14059 12.7442 9.94772C11.767 9.35237 10.719 9.00928 9.77109 8.86412C9.1758 8.77296 8.60515 8.7575 8.10164 8.81391C7.61062 8.86892 7.12792 8.99852 6.7521 9.24278C6.36281 9.4958 6.25004 9.90982 6.25006 10.2072L6.25012 11.56L3.01365 8Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
