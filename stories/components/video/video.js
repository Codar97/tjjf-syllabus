import React from 'react';

export const Video = (props) => <div><iframe style={{width: 'calc(100vw - 16px)', height: 'calc(100vh - 24px)'}}
                                        src={props.url}
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                             allowFullScreen/></div>;