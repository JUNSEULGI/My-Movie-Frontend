import React, { useState, useEffect } from 'react';
import PageSkeleton from '../../components/PageSkeleton';

function LoadContainer({ ddd, loading }) {
  return <>{loading ? <PageSkeleton /> : ddd}</>;
}

export default LoadContainer;
