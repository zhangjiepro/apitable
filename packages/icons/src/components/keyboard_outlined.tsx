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

export const KeyboardOutlined: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M6.5 9.75C6.22386 9.75 6 9.97386 6 10.25V10.75C6 11.0261 6.22386 11.25 6.5 11.25H11.875C12.1511 11.25 12.375 11.0261 12.375 10.75V10.25C12.375 9.97386 12.1511 9.75 11.875 9.75H6.5Z" fill={ colors[0] }/>
<path d="M3.5 7.25C3.5 6.97386 3.72386 6.75 4 6.75H4.5C4.77614 6.75 5 6.97386 5 7.25V7.75C5 8.02614 4.77614 8.25 4.5 8.25H4C3.72386 8.25 3.5 8.02614 3.5 7.75V7.25Z" fill={ colors[0] }/>
<path d="M4 9.75C3.72386 9.75 3.5 9.97386 3.5 10.25V10.75C3.5 11.0261 3.72386 11.25 4 11.25H4.5C4.77614 11.25 5 11.0261 5 10.75V10.25C5 9.97386 4.77614 9.75 4.5 9.75H4Z" fill={ colors[0] }/>
<path d="M6 7.25C6 6.97386 6.22386 6.75 6.5 6.75H7C7.27614 6.75 7.5 6.97386 7.5 7.25V7.75C7.5 8.02614 7.27614 8.25 7 8.25H6.5C6.22386 8.25 6 8.02614 6 7.75V7.25Z" fill={ colors[0] }/>
<path d="M9 6.75C8.72386 6.75 8.5 6.97386 8.5 7.25V7.75C8.5 8.02614 8.72386 8.25 9 8.25H9.5C9.77614 8.25 10 8.02614 10 7.75V7.25C10 6.97386 9.77614 6.75 9.5 6.75H9Z" fill={ colors[0] }/>
<path d="M11 7.25C11 6.97386 11.2239 6.75 11.5 6.75H12C12.2761 6.75 12.5 6.97386 12.5 7.25V7.75C12.5 8.02614 12.2761 8.25 12 8.25H11.5C11.2239 8.25 11 8.02614 11 7.75V7.25Z" fill={ colors[0] }/>
<path d="M8 2C7.58579 2 7.25 2.33579 7.25 2.75V4H2.25C1.55964 4 1 4.55964 1 5.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V5.25C15 4.55964 14.4404 4 13.75 4H8.75V2.75C8.75 2.33579 8.41421 2 8 2ZM2.5 12.5V5.5H13.5V12.5H2.5Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'keyboard_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M6.5 9.75C6.22386 9.75 6 9.97386 6 10.25V10.75C6 11.0261 6.22386 11.25 6.5 11.25H11.875C12.1511 11.25 12.375 11.0261 12.375 10.75V10.25C12.375 9.97386 12.1511 9.75 11.875 9.75H6.5Z', 'M3.5 7.25C3.5 6.97386 3.72386 6.75 4 6.75H4.5C4.77614 6.75 5 6.97386 5 7.25V7.75C5 8.02614 4.77614 8.25 4.5 8.25H4C3.72386 8.25 3.5 8.02614 3.5 7.75V7.25Z', 'M4 9.75C3.72386 9.75 3.5 9.97386 3.5 10.25V10.75C3.5 11.0261 3.72386 11.25 4 11.25H4.5C4.77614 11.25 5 11.0261 5 10.75V10.25C5 9.97386 4.77614 9.75 4.5 9.75H4Z', 'M6 7.25C6 6.97386 6.22386 6.75 6.5 6.75H7C7.27614 6.75 7.5 6.97386 7.5 7.25V7.75C7.5 8.02614 7.27614 8.25 7 8.25H6.5C6.22386 8.25 6 8.02614 6 7.75V7.25Z', 'M9 6.75C8.72386 6.75 8.5 6.97386 8.5 7.25V7.75C8.5 8.02614 8.72386 8.25 9 8.25H9.5C9.77614 8.25 10 8.02614 10 7.75V7.25C10 6.97386 9.77614 6.75 9.5 6.75H9Z', 'M11 7.25C11 6.97386 11.2239 6.75 11.5 6.75H12C12.2761 6.75 12.5 6.97386 12.5 7.25V7.75C12.5 8.02614 12.2761 8.25 12 8.25H11.5C11.2239 8.25 11 8.02614 11 7.75V7.25Z', 'M8 2C7.58579 2 7.25 2.33579 7.25 2.75V4H2.25C1.55964 4 1 4.55964 1 5.25V12.75C1 13.4404 1.55964 14 2.25 14H13.75C14.4404 14 15 13.4404 15 12.75V5.25C15 4.55964 14.4404 4 13.75 4H8.75V2.75C8.75 2.33579 8.41421 2 8 2ZM2.5 12.5V5.5H13.5V12.5H2.5Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
