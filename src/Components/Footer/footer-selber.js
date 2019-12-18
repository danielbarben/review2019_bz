<footer className="ui vertical segment">
        <div className="ui container">
          <div className="ui two column divided stacable grid">
            <div className="stretched aligned row">
              <div className="column">
                <table className="ui definition very basic small infograpic table" style={{ paddingTop: '0.3em' }}>
                  <tbody>
                    <tr>
                      <td>Programmierung</td>
                      <td>Daniel Barben</td>
                    </tr>
                    <tr>
                      <td>Konzept</td>
                      <td>Marco Zysset</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="column">
                <div className="ui message feedback">
                  <FeedbackMessage
                      mailTo='online@bernerzeitung.ch'
                      question='Haben Sie Anmerkungen oder einen Fehler entdeckt?'
                    />
                </div>
                <div className="ui fluid share aligned container">
                <ShareButtons
                        articleId='16267582'
                        displayType={displayTypes.VERTICAL_BUTTONS}
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </footer> 