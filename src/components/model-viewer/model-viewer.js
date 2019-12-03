import React from 'react';

export const ModelViewer = ({model}) => <iframe src={model}
                                                style={{width: 'calc(100vw - 16px)', height: 'calc(100vh - 24px)'}}/>