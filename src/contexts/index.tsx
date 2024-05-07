import React, { createContext, useState, useContext, FC } from 'react';

interface TaskContextType {
  name: string;
  stack: string;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useNameContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: any) => {

  const name = 'russo'
  const stack = 'Froont end'

  return (
    <TaskContext.Provider value={{  name, stack }}>
      {children}
    </TaskContext.Provider>
  );
};
