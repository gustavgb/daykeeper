import React, { Component } from 'react';
import Log from 'features/timeline/components/log';
import Page from 'components/page';
import Status from 'features/timeline/components/status';
import Add from 'features/timeline/components/add';
import Draft from 'features/draft/container';

class Timeline extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
      logs,
      status,
      onEdit,
      draftName,
      onDelete,
      onAdd,
      lastUpdateTime,
    } = this.props;

    return (
      <Page>
        <Add onClick={onAdd}>Ny note</Add>
        {status !== 'fetching' ? logs.map(log => log.name === draftName ? (
          <Draft
            key={log.name}
          />
        ) : (
          <Log
            key={log.name}
            onEdit={() => onEdit(log)}
            onDelete={() => onDelete(log.name)}
            log={log}
            disableActions={draftName !== ''}
          />
        )) : (
          <span>Tænker...</span>
        )}
        {status === 'saved' && <Status>Gemt - {lastUpdateTime}</Status>}
        {status === 'failed' && <Status error>Fejl - {lastUpdateTime}</Status>}
        {status === 'fetching' && <Status>Indlæser...</Status>}
        {status === 'saving' && <Status>Gemmer...</Status>}
        {status === 'fetched' && <Status>Indlæst - {lastUpdateTime}</Status>}
      </Page>
    );
  }
}

export default Timeline;
