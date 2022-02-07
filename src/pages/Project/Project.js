import React from "react";
import { getProjectById } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Suspense } from "../../components/Suspense";

function Project() {
  const { projectId } = useParams();
  const { data, loading, error } = useFetch(
    () => getProjectById(projectId),
    [projectId]
  );

  return (
    <div>
      <Suspense error={error} loading={loading} noData={!data && !loading}>
        <h2>Project {data?.title}</h2>
        <p>{data?.title}</p>
        <p>Description : {data?.description}</p>
        <p>{data?.task}</p>
      </Suspense>
    </div>
  );
}

export default Project;
