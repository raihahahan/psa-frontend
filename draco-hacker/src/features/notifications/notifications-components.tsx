"use client";

import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { NotificationRow } from "./notifications-type";
import { useEffect, useState } from "react";
import supabase from "../database/supabase";

export function NotificationsTable() {
  const [data, setData] = useState<NotificationRow[]>([]);

  useEffect(() => {
    async function f() {
      const { data, error } = await supabase.from("notifications").select();
      setData(data as any);
    }
    f();
  }, []);
  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={data}
      // define columns
      columns={[
        {
          accessor: "id",
          // this column has a custom title
          title: "ID",
          // right-align column
          textAlign: "right",
        },
        { accessor: "data" },
        {
          accessor: "created_at",

          // this column has custom cell data rendering
        },
      ]}
      // execute this callback when a row is clicked
    />
  );
}
